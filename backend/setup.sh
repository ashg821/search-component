mongo comapanydb --eval "db.dropDatabase()" 
mongoimport -d companydb -c ads --file data/ads.json
mongoimport -d companydb -c companies --file data/companies.json
