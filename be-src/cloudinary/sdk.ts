import { v2 as cloudinary } from "cloudinary"

// Return "https" URLs by setting secure: true
cloudinary.config({
    cloud_name: 'dojwbcghv',
    api_key: '664834664757954',
    api_secret: 'qLPVpRYhEcq_m_YiK8T-N8kZmw4'
});

// Log the configuration
export { cloudinary }