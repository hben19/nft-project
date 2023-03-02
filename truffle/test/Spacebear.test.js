const SpaceBear = artifacts.require("SpaceBear");
const truffleAssert = require("truffle-assertions");

contract("SpaceBear", (accounts)=> {
    it("should credit an NFT to a specific account", async() => {
        const spacebearInstance = await SpaceBear.deployed();
        let txResult = await spacebearInstance.safeMint(accounts[1], "spacebear_1.json");
        console.log(txResult);
        // assert.equal(txResult.logs[0].event, "Transfer", "Event is not the Transfer Event");
        // assert.equal(txResult.logs[0].args.from, "0x0000000000000000000000000000000000000000", "From is not the zero address");
        
        truffleAssert.eventEmitted(txResult,"Transfer", {from: "0x0000000000000000000000000000000000000000", to: accounts[1], tokenId: web3.utils.toBN("0")});
        console.log(txResult.logs[0].args);
        assert.equal(await spacebearInstance.ownerOf(0), accounts[1],"Owner is not equal account 2");
    });
})