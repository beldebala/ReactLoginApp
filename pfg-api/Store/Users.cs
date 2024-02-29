using System.ComponentModel;
using Microsoft.AspNetCore.Identity;

namespace PFG.Application{

    public interface IUserStore {
        
        public Task<List<PFGUser>> GetUsers();
    }
    public class UserStore: IUserStore
    {
        /// <summary>
        /// Returns list of users
        /// </summary>
        /// <returns></returns>
        public async Task<List<PFGUser>> GetUsers(){
            List<PFGUser> users = new List<PFGUser>();
            for(int i=0; i< 100; i++){
                PFGUser user = new PFGUser(
                    $"test_user_{i}@testmail.com",
                    $"testPassword{i}",
                    $"testUser{i}"
                );
                users.Add(user);
            }
            return users;
        }
    }
}