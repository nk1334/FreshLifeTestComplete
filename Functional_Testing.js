Browsers.Item(Edge).Run("https://www.hollandandbarrett.com/");
let rewardsSection=Sys.Browser(Edge).Page("*").Panel("RewardSection");
rewardsSection.click();
let joinRewardForLifeLink=Sys.Browser(Edge).Page("*").FindChild("xpath","//*[(text()='Join Rewards for Life')]");