pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CoinPocket is ERC20 {
    constructor() ERC20("CoinPocket", "CP") public {
        _mint(address(this), 500000000000000000);
    }

    mapping (address => uint256) private investments;
    mapping (address => uint256) private lastInvestTime;
    uint256 public ROI;
    uint256 public withdrawDuration = 6 days; // duration in seconds

    function invest() public payable {
        lastInvestTime[msg.sender] = block.timestamp;
        investments[msg.sender] += msg.value;
    }

    function withdraw() public {
        require(block.timestamp >= lastInvestTime[msg.sender] + withdrawDuration, "Duration not yet completed");
        require(investments[msg.sender] > 0, "No investments to withdraw");

        address user = msg.sender;
        uint256 amount = investments[user] * ROI;
        _transfer(address(this), user, amount);
        investments[user] = 0;
    }

    function getProfit() public view returns (uint256) {
        return investments[msg.sender] * ROI;
    }
    
    function receive() external payable {
        lastInvestTime[msg.sender] = block.timestamp;
        investments[msg.sender] += msg.value;
    }

    function() external payable {
        receive();
    }
}
