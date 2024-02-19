-include .env

.PHONY: all test clean deploy fund help install snapshot format anvil 

DEFAULT_ANVIL_KEY := 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80

help:
	@echo "Usage:"
	@echo "  make deploy [ARGS=...]\n    example: make deploy ARGS=\"--network sepolia\""
	@echo ""
	@echo "  make fund [ARGS=...]\n    example: make deploy ARGS=\"--network sepolia\""

all: clean remove install update build

# Clean the repo
clean  :; forge clean

# Remove modules
remove :; rm -rf .gitmodules && rm -rf .git/modules/* && rm -rf lib && touch .gitmodules && git add . && git commit -m "modules"

install :; forge install cyfrin/foundry-devops --no-commit && forge install foundry-rs/forge-std --no-commit && forge install openzeppelin/openzeppelin-contracts --no-commit && forge install openzeppelin/openzeppelin-contracts-upgradeable --no-commit && forge install transmissions11/solmate --no-commit && npm i

# Update Dependencies
update:; forge update

build:; forge build

test :; forge test 

coverage :; forge coverage --report debug > coverage-report.txt

snapshot :; forge snapshot

format :; forge fmt

anvil :; anvil -m 'test test test test test test test test test test test junk' --steps-tracing --block-time 1

NETWORK_ARGS := --rpc-url http://localhost:8545 --private-key $(DEFAULT_ANVIL_KEY) --broadcast

ifeq ($(findstring --network goerli,$(ARGS)),--network goerli)
	NETWORK_ARGS := --rpc-url $(GOERLI_RPC_URL) --private-key $(PRIVATE_KEY) --broadcast --verify --etherscan-api-key $(ETHERSCAN_API_KEY)
endif

ifeq ($(findstring --network mumbai,$(ARGS)),--network mumbai)
	NETWORK_ARGS := --rpc-url $(MUMBAI_RPC_URL) --private-key $(PRIVATE_KEY) --broadcast --verify --etherscan-api-key $(POLYGON_SCAN_API_KEY)
endif

ifeq ($(findstring --network sepolia,$(ARGS)),--network sepolia)
	NETWORK_ARGS := --rpc-url $(SEPOLIA_RPC_URL) --private-key $(PRIVATE_KEY) --broadcast --verify --etherscan-api-key $(ETHERSCAN_API_KEY)
endif

ifeq ($(findstring --network fuji,$(ARGS)),--network fuji)
	NETWORK_ARGS := --rpc-url $(FUJI_RPC_URL) --private-key $(PRIVATE_KEY) --broadcast --verify --etherscan-api-key $(SNOWTRACE_API_KEY)
endif

ifeq ($(findstring --network zkevmTestnet,$(ARGS)),--network zkevmTestnet)
	NETWORK_ARGS := --rpc-url $(POLYGON_ZKEVM_TESTNET_RPC_URL) --private-key $(PRIVATE_KEY) --broadcast --verify --etherscan-api-key $(POLYGON_ZKEVM_SCAN_API_KEY)
endif

ifeq ($(findstring --network baseGoerli,$(ARGS)),--network baseGoerli)
	NETWORK_ARGS := --rpc-url $(BASE_GOERLI_RPC_URL) --private-key $(PRIVATE_KEY) --broadcast --verify --etherscan-api-key $(BASE_SCAN_API_KEY)
endif

ifeq ($(findstring --network linea,$(ARGS)),--network linea)
	NETWORK_ARGS := --rpc-url $(LINEA_RPC_URL) --private-key $(PRIVATE_KEY) --broadcast --verify --etherscan-api-key $(LINEA_SCAN_API_KEY)
endif

ifeq ($(findstring --network scrollSepolia,$(ARGS)),--network scrollSepolia)
	NETWORK_ARGS := --rpc-url $(SCROLL_SEPOLIA_RPC_URL) --private-key $(PRIVATE_KEY) --broadcast --verify --etherscan-api-key $(SEPOLIA_SCAN_API_KEY)
endif

ifeq ($(findstring --network xdcTestnet,$(ARGS)),--network xdcTestnet)
	NETWORK_ARGS := --rpc-url $(XDC_TESTNET_RPC_URL) --private-key $(PRIVATE_KEY) --broadcast
endif

ifeq ($(findstring --network celoTestnet,$(ARGS)),--network celoTestnet)
	NETWORK_ARGS := --rpc-url $(CELO_TESTNET_RPC_URL) --private-key $(PRIVATE_KEY) --broadcast --verify --etherscan-api-key $(CELO_SCAN_API_KEY)
endif

ifeq ($(findstring --network arbGoreli,$(ARGS)),--network arbGoreli)
	NETWORK_ARGS := --rpc-url $(ARB_GOERLI_RPC_URL) --private-key $(PRIVATE_KEY) --broadcast --verify --etherscan-api-key $(ARB_GOERLI_SCAN_API_KEY)
endif

ifeq ($(findstring --network gnosis,$(ARGS)),--network gnosis)
	NETWORK_ARGS := --rpc-url $(GNOSIS_RPC_URL) --private-key $(PRIVATE_KEY) --broadcast --verify --etherscan-api-key $(GONSIS_SCAN_API_KEY)
endif

# Commands for Local

deployBasicUSDC:
	@forge script script/DeployBasicUSDC.s.sol:DeployBasicUSDC $(NETWORK_ARGS)

deployTreasury:
	@forge script script/DeployTreasury.s.sol:DeployTreasury $(NETWORK_ARGS)

deployUtils:
	@forge script script/DeployUtils.s.sol:DeployUtils $(NETWORK_ARGS)

setToolIndexOnUtils:
	@forge script script/Interactions.s.sol:SetToolIndexOnUtils $(NETWORK_ARGS)

setChainSelectorOnUtils:
	@forge script script/Interactions.s.sol:SetChainSelectorOnUtils $(NETWORK_ARGS)	



deployMainContractDeployer:
	@forge script script/DeployMainContractDeployer.s.sol:DeployMainContractDeployer $(NETWORK_ARGS)


setUpDeployer:
	@forge script script/Interactions.s.sol:SetUpTheDeployer $(NETWORK_ARGS)

setUtilsOnMain:
	@forge script script/Interactions.s.sol:SetUtilsOnMain $(NETWORK_ARGS)

deployChainlinkCCIP:
	@forge script script/DeployChainlinkCCIP.s.sol:DeployChainlinkCCIP $(NETWORK_ARGS)

setUtilsOnCCIP:
	@forge script script/Interactions.s.sol:SetUtilsOnCCIP $(NETWORK_ARGS)

setCCIPGasLimit:
	@forge script script/Interactions.s.sol:SetCCIPGasLimit $(NETWORK_ARGS)

setChainlinkCCIPOnDeployer:
	@forge script script/Interactions.s.sol:SetChainlinkCCIPOnDeployer $(NETWORK_ARGS)

startWalletCreation:
	@forge script script/Interactions.s.sol:StartWalletCreation $(NETWORK_ARGS) -vvvvv

setToolForChainIdForMainContract:
	@forge script script/Interactions.s.sol:SetToolForChainIdForMainContract $(NETWORK_ARGS)

setCCIPForMainContract:
	@forge script script/Interactions.s.sol:SetCCIPForMainContract $(NETWORK_ARGS)

mintUSDCForWallets:
	@forge script script/Interactions.s.sol:MintUSDCForWallets $(NETWORK_ARGS)

sendMoney:
	@forge script script/Interactions.s.sol:SendMoney $(NETWORK_ARGS)

deployHyperlaneAPI:
	@forge script script/DeployHyperlaneAPI.s.sol:DeployHyperlaneAPI $(NETWORK_ARGS)
	

# Commands for Testnets

deployBasicUSDCOnTestnets:
	make deployBasicUSDC ARGS="--network mumbai" && make deployBasicUSDC ARGS="--network sepolia"

deployTreasuryOnTestnets:
	make deployTreasury ARGS="--network mumbai" && make deployTreasury ARGS="--network sepolia"

deployUtilsOnTestnets:
	make deployUtils ARGS="--network mumbai" && make deployUtils ARGS="--network sepolia"

setToolIndexOnUtilsOnTestnets:
	make setToolIndexOnUtils ARGS="--network mumbai" && make setToolIndexOnUtils ARGS="--network sepolia"

setChainSelectorOnUtilsOnTestnets:
	make setChainSelectorOnUtils ARGS="--network mumbai" && make setChainSelectorOnUtils ARGS="--network sepolia"

deployMainContractDeployerOnTestnets:
	make deployMainContractDeployer ARGS="--network mumbai" && make deployMainContractDeployer ARGS="--network sepolia"

setUpDeployerOnTestnets:
	make setUpDeployer ARGS="--network mumbai" && make setUpDeployer ARGS="--network sepolia"


deployChainlinkCCIPOnTestnets:
	make deployChainlinkCCIP ARGS="--network mumbai" && make deployChainlinkCCIP ARGS="--network sepolia"

setUtilsOnCCIPOnTestnets:
	make setUtilsOnCCIP ARGS="--network mumbai" && make setUtilsOnCCIP ARGS="--network sepolia"

setCCIPGasLimitOnTestnets:
	make setCCIPGasLimit ARGS="--network mumbai" && make setCCIPGasLimit ARGS="--network sepolia"

setChainlinkCCIPOnDeployerOnTestnets:
	make setChainlinkCCIPOnDeployer ARGS="--network mumbai" && make setChainlinkCCIPOnDeployer ARGS="--network sepolia"

startWalletCreationOnTestnets:
	make startWalletCreation ARGS="--network mumbai"


setUtilsOnMainOnTestnets:
	make setUtilsOnMain ARGS="--network mumbai" && make setUtilsOnMain ARGS="--network sepolia"



setToolForChainIdForMainContractOnTestnets:
	make setToolForChainIdForMainContract ARGS="--network mumbai" && make setToolForChainIdForMainContract ARGS="--network sepolia"

setCCIPForMainContractOnTestnets:
	make setCCIPForMainContract ARGS="--network mumbai" && make setCCIPForMainContract ARGS="--network sepolia"
	
mintUSDCForWalletsOnTestnets:
	make mintUSDCForWallets ARGS="--network mumbai" && make mintUSDCForWallets ARGS="--network sepolia"

sendMoneyOnTestnets:
	make sendMoney ARGS="--network mumbai"

deployHyperlaneAPIOnTestnets:
	make deployHyperlaneAPI ARGS="--network mumbai" && make deployHyperlaneAPI ARGS="--network sepolia"