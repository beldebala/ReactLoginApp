namespace PFG.Application{
    public class PFGUser {
        public string Email{ get; private set;}
        public string Password {get; private set;}
        public string UserName { get; private set;}
        public PFGUser(string email, string password, string username)
        {
            this.Email = email;
            this.Password = password;
            this.UserName = username;
        }    
    }
}
