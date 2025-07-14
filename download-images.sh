#!/bin/bash

# Create images directory
mkdir -p public/images

# Download the logos
curl -o public/images/logo-black.png "https://freeway.church/wp-content/uploads/2023/07/FWC_Logo_Icon-Outline-BLK.png"
curl -o public/images/logo-white-horizontal.png "https://freeway.church/wp-content/uploads/2023/07/FWC_Logo_Horiziontal-Block-WHT.png"
curl -o public/images/logo-white-stack.png "https://freeway.church/wp-content/uploads/2023/07/FWC_Logo_Stack-Outline-WHT.png"
curl -o public/images/podcast.png "https://freeway.church/wp-content/uploads/2023/07/Things-We-Say-Podcast-e1689763891759.png"
curl -o public/images/youtube-preview.png "https://freeway.church/wp-content/uploads/2023/07/youtube-glimpse.png"

echo "Images downloaded successfully!"