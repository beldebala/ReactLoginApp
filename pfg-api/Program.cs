using PFG.Application;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        builder => builder.WithOrigins("http://localhost:3000") // Adjust the URL based on your React app's development server
                          .AllowAnyMethod()
                          .AllowAnyHeader());
});

builder.Services.AddSingleton<IUserStore, UserStore>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseCors("AllowReactApp");    
}

app.MapPost("/login", async ([FromBody] PFGUser loggedInUser, IUserStore userStore, HttpResponse response) => {            
      var users = await userStore.GetUsers();
      var user = users.Find(x => x.Email == loggedInUser.Email);
     if(user != null){
        return Results.Ok(user.UserName);        
    }
    else
    {
       return Results.BadRequest("Invalid Credentials");          
    }
});

app.Run();
