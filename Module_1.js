Browsers.Item(btChrome).Run("https://www.hollandandbarrett.com/");
let alertbutton=Aliases.Browser(btChrome).Page("*").Panel("onetrust-accept-btn-handler").Button("onetrust-accept-btn-handler");
if(alertbutton.Exists){
  alert.Button.Click();
  }
let rewardsSection=Aliases.Browser(btChrome).pageRewardSection.Find("Rewards For Life");
rewardsSection.Click();
let firstNameInput=Aliases.Browser(btChrome).PagefirstNameInput.TextInput("firstName");
let LastNameInput=Aliases.Browser(btChrome).PageLastNameInput.TextInput("lastName");
let email=Aliases.Browser(btChrome).Pageemail.TextInput("email");
let confirmemail=Aliases.Browser(btChrome).Pageconfirmemail.TextInput("confirmEmail");
let passwordInput=Aliases.Browser(btChrome).PagepasswordInput.TextInput("password");
firstNameInput.SetText("abc");
LastNameInput.SetText("xyz");
email.SetText("abcxyz@gmail.com");
confirmemail.SetText("abcxyz@gmail.com");
passwordInput.SetText("Abc123@!");

let button=Aliases.Browser(btChrome).Pagebutton.Find("Email me about ");
button.Click();

let agreeButton = Aliases.Browser(btChrome).PageagreeButton.Find("I agree to the Rewards for Life and website ");
agreeButton.Click();
let Accountcreated = Aliases.Browser(btChrome).PagecreateAccountButtonFind("Create an account"); 
Accountcreated.Click();
if(Accountcreated.Exists)
{
Log.Message("Account has been created")
}
else
{Log.Error("Account created failed");

}

Browsers.Item(btChrome).close();





