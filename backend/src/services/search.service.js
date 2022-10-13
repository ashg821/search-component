const Ad = require('../models/ads.model');
const Company = require('../models/company.model');




const searchAds = async (string) => {
    let filteredAds = []
    //if the search string is empty
    if (!string) {
        filteredAds = await Ad.aggregate([
            {
                $lookup:
                {
                    from: "companies",
                    localField: "companyId",
                    foreignField: "_id",
                    as: "companyDetails"
                }

            }

        ]);
    }
    //if the search string is not present
    else {
        string = string.trim();
        filteredAds = await Ad.aggregate([
            {
                $lookup:
                {
                    from: "companies",
                    localField: "companyId",
                    foreignField: "_id",
                    as: "companyDetails"
                }

            },
            {
                $match: {
                    $or: [
                        { primaryText: { $regex: string, $options: 'ig' } },
                        { headline: { $regex: string, $options: 'ig' } },
                        { description: { $regex: string, $options: 'ig' } },
                        {
                            companyDetails: { $elemMatch: { name: { $regex: string, $options: 'ig' } } }
                        }
                    ]
                }
            }

        ]);
    }
    return filteredAds;

}



module.exports = { searchAds }