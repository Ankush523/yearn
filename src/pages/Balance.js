import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import yearnSdk from "../sdk";
import initWallet from "../wallet";

const Balance = () => {
  const [loading, setLoading] = useState(false);
  const [balances, setBalances] = useState([]);

  const getYourBalances = async () => {
    const wallet = await initWallet();
    setLoading(true);
    // Get all balances for account
    setBalances(await yearnSdk.tokens.balances(await wallet.getAddress()));
    setLoading(false);
  };

  // Helper function to format balance with ethers
  const formatBalance = (balance, decimals) => {
    return ethers.utils.formatUnits(balance, decimals);
  };

  useEffect(() => console.log("YOUR BALANCES UPDATED", balances), [balances]);

  return (
    <div>
      <h2>Balance</h2>

      <section>
        <p>Get your Balances</p>
        <button onClick={getYourBalances} disabled={loading}>
          {loading ? "Loading" : "Get your Balances"}
        </button>

        <p>Your Balances:</p>
        {!!balances?.length && (
          <div className="scroll-list">
            {balances?.map((b) => {
              return (
                <div key={b.address}>
                  {b.token.symbol} :{" "}
                  {formatBalance(b.balance, b.token.decimals)}
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default Balance;
