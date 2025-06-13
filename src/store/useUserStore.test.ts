import useUserStore from './useUserStore';

describe('useUserStore', () => {
  beforeEach(() => {
    // Reset store state before each test
    useUserStore.setState({ user: undefined });
  });

  it('should have undefined user by default', () => {
    const { user } = useUserStore.getState();
    expect(user).toBeUndefined();
  });

  it('should set user correctly', () => {
    const testUser = { user_id: '1', username: 'testuser' };
    useUserStore.getState().setUser(testUser);
    expect(useUserStore.getState().user).toEqual(testUser);
  });

  it('should clear user', () => {
    const testUser = { user_id: '2', username: 'anotheruser' };
    useUserStore.getState().setUser(testUser);
    useUserStore.getState().clearUser();
    expect(useUserStore.getState().user).toBeUndefined();
  });

  it('should set user to null', () => {
    useUserStore.getState().setUser(null);
    expect(useUserStore.getState().user).toBeNull();
  });

  it('should set user to undefined', () => {
    useUserStore.getState().setUser({ user_id: '3', username: 'user3' });
    useUserStore.getState().setUser(undefined);
    expect(useUserStore.getState().user).toBeUndefined();
  });
});
