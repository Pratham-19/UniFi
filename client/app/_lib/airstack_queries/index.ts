export const GetAddressFromEns = `
    query GetAddressFromEns($name: String!) {
        Domain(input: { blockchain: ethereum, name: $name }) {
            resolvedAddress
        }
    }
`;

export const GetENSFromAddress = `
query GetAddressFromEns($resolvedAddress: Address!) {
    Domain(input: {blockchain: ethereum, resolvedAddress: $resolvedAddress}) {
      name
      tokenNft {
        contentValue {
          image {
            medium
          }
        }
      }
    }
  }
`;
export const GetLensFromAddress = `
query GetLensFromAddress($resolvedAddress: Identity!) {
    Socials(
      input: {filter: {identity: {_eq: $resolvedAddress}, dappSlug: {_in: [lens_v2_polygon, lens_polygon]}}, blockchain: ethereum}
    ) {
      Social {
        profileImage
        profileName
      }
    }
  }
`;

// add lens/@handle
export const GetAddressFromLens = `
query GetAddressFromLens($lensHandle: Identity!) {
    Socials(
      input: {filter: {identity: {_eq: $lensHandle}, dappSlug: {_in: [lens_v2_polygon, lens_polygon]}}, blockchain: ethereum}
    ) {
      Social {
        userAddress
      }
    }
  }
`;

export const FetchPoapFromAddress = `
query FetchPoapFromAddres($resolvedAddress: Identity) {
    Poaps(input: {filter: {owner: {_eq: $resolvedAddress}}, blockchain: ALL}) {
      Poap {
        tokenUri
        chainId
      }
    }
  }
`;

// https://opensea.io/assets/base/0x06b3a9424a45dcba3bb6b902fa27eda3122215fe/2739
export const GetNFTs = `
query GetNFTs($resolvedAddress: Identity) {
  Base: TokenBalances(
    input: {filter: {owner: {_eq: $resolvedAddress}, tokenType: {_in: [ERC721]}}, blockchain: base, limit: 10}
  ) {
    TokenBalance {
      amount
      tokenAddress
      tokenId
      tokenNfts {
        contentValue {
          image {
            large
          }
        }
      }
    }
  }
  Ethereum: TokenBalances(
    input: {filter: {owner: {_eq: $resolvedAddress}, tokenType: {_in: [ERC721]}}, blockchain: ethereum, limit: 10}
  ) {
    TokenBalance {
      amount
      tokenAddress
      tokenId
      tokenNfts {
        contentValue {
          image {
            large
          }
        }
      }
    }
  }
  Polygon: TokenBalances(
    input: {filter: {owner: {_eq: $resolvedAddress}, tokenType: {_in: [ERC721]}}, blockchain: polygon, limit: 10}
  ) {
    TokenBalance {
      amount
      tokenAddress
      tokenId
      tokenNfts {
        contentValue {
          image {
            large
          }
        }
      }
    }
  }
}
`;
