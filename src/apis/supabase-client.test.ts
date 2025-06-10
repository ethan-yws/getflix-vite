import { supabaseClient } from './supabase-client';
import { config } from '../config';

jest.mock('../config', () => ({
  config: {
    supabase: {
      apiPath: 'https://fake.supabase.co/rest/v1',
      anonApiKey: 'test-api-key',
    },
  },
}));

describe('supabaseClient', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      } as Response)
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('createUser', () => {
    it('calls fetch with correct parameters', async () => {
      const email = 'test@example.com';
      await supabaseClient.createUser(email);

      expect(global.fetch).toHaveBeenCalledWith(
        `${config.supabase.apiPath}/User`,
        expect.objectContaining({
          method: 'POST',
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${config.supabase.anonApiKey}`,
            apikey: config.supabase.anonApiKey,
          }),
          body: JSON.stringify({ username: email }),
        })
      );
    });

    it('throws and logs error if fetch fails', async () => {
      const error = new Error('Network error');
      (global.fetch as jest.Mock).mockImplementationOnce(() => {
        throw error;
      });
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

      await expect(
        supabaseClient.createUser('fail@example.com')
      ).rejects.toThrow('Network error');
      expect(consoleSpy).toHaveBeenCalledWith('Error creating user:', error);

      consoleSpy.mockRestore();
    });
  });

  describe('getUser', () => {
    it('calls fetch with correct parameters and returns data', async () => {
      const username = 'testuser';
      const mockData = [{ id: 1, username: 'testuser' }];
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockData),
      });

      const result = await supabaseClient.getUser(username);

      expect(global.fetch).toHaveBeenCalledWith(
        `${config.supabase.apiPath}/User?username=eq.${username}`,
        expect.objectContaining({
          method: 'GET',
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${config.supabase.anonApiKey}`,
            apikey: config.supabase.anonApiKey,
          }),
        })
      );
      expect(result).toEqual(mockData);
    });

    it('throws and logs error if fetch fails', async () => {
      const error = new Error('Network error');
      (global.fetch as jest.Mock).mockImplementationOnce(() => {
        throw error;
      });
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

      await expect(supabaseClient.getUser('failuser')).rejects.toThrow(
        'Network error'
      );
      expect(consoleSpy).toHaveBeenCalledWith('Error fetching user:', error);

      consoleSpy.mockRestore();
    });

    it('throws and logs error if response is not ok', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        statusText: 'Not Found',
        json: () => Promise.resolve({}),
      });
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

      await expect(supabaseClient.getUser('notfound')).rejects.toThrow(
        'Error fetching user: Not Found'
      );
      expect(consoleSpy).toHaveBeenCalledWith(
        'Error fetching user:',
        expect.any(Error)
      );

      consoleSpy.mockRestore();
    });
  });
});
