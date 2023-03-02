const SpaceBear = artifacts.require("SpaceBear");

module.exports = function(deployer, network, accounts) {
    deployer.deploy(SpaceBear,{from: accounts[0]});
}