import { useState, useEffect } from "react";
import { useStateContext } from "../context";
import { ethers } from "../constants/ethers-5.1.esm.min";
import { DisplayCampaigns } from "../components";
const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { account, contractAddress, getUserCampaigns } = useStateContext();
  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    const parsedCampaigns = data.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(
        campaign.amountCollected.toString()
      ),
      image: campaign.image,
      pId: i,
    }));
    setCampaigns(parsedCampaigns);
    setIsLoading(false);

    return parsedCampaigns;
  };
  useEffect(() => {
    if (account) fetchCampaigns();
  }, [account, contractAddress]);


  return (
    <DisplayCampaigns
      title="All Campaigns"
      isLoading={isLoading}
      campaigns={campaigns}
    />
  );
};
export default Profile;
