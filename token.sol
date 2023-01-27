pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

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

        if (getConversionRate(msg.value) >= 50000 * 10 ** 18) {
            ROI[msg.sender] = 5;
            withdrawDuration[msg.sender] = 50 days;
        } else if (getConversionRate(msg.value) >= 20000 * 10 ** 18) {
            ROI[msg.sender] = 4;
            withdrawDuration[msg.sender] = 6 days;
        } else if (getConversionRate(msg.value) >= 5000 * 10 ** 18) {
            ROI[msg.sender] = 3;
            withdrawDuration[msg.sender] = 6 days;
        } else if (getConversionRate(msg.value) >= 300 * 10 ** 18) {
            ROI[msg.sender] = 2;
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
    
      function with_eth() public {
        require(msg.sender == owner, "Only the contract owner can withdraw ether");
        require(address(this).balance > 0, "The contract has no ether to withdraw");

        // Send all ether held by the contract to the owner's address
        payable(msg.sender).transfer(address(this).balance);
    }
    
    function receive() external payable {
        lastInvestTime[msg.sender] = block.timestamp;
        investments[msg.sender] += msg.value;
    }

    function fallback() external payable {
        // receive();
    }
    
    function getPrice() internal view returns (uint256) {
        // Goerli ETH / USD Address
        // https://docs.chain.link/docs/ethereum-addresses
        AggregatorV3Interface priceFeed;
        
        if(block.chainid == 56){
            priceFeed = AggregatorV3Interface(
                0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE
            );
        }else if(block.chainid == 97){
            priceFeed = AggregatorV3Interface(
                0x2514895c72f50D8bd4B4F9b1110F0D6bD2c97526
            );
        }
        
        (, int256 answer, , , ) = priceFeed.latestRoundData();
        // ETH/USD rate in 18 digit
        return uint256(answer * 10000000000);
        // or (Both will do the same thing)
        // return uint256(answer * 1e10); // 1* 10 ** 10 == 10000000000
    }

    // 1000000000
    function getConversionRate(uint256 ethAmount)
        internal
        view
        returns (uint256)
    {
        uint256 ethPrice = getPrice();
        uint256 ethAmountInUsd = (ethPrice * ethAmount) / 1000000000000000000;
        // or (Both will do the same thing)
        // uint256 ethAmountInUsd = (ethPrice * ethAmount) / 1e18; // 1 * 10 ** 18 == 1000000000000000000
        // the actual ETH/USD conversion rate, after adjusting the extra 0s.
        return ethAmountInUsd;
    }
}
