# The-Band-Bootstrap-Template-Site
This is a Simple Bootstrap Website Template made for easy to use modification to the site from a simple config.json file and 3 txt files!



### `config.json` Explanation

The `config.json` file contains configuration settings for various aspects of the website. Here is a detailed explanation of each key and its purpose:

1. **`contactEmail`**: The email address displayed for contacting the band.

2. **`contactPhone`**: The phone number displayed for contacting the band.

3. **`coversPicturesPaths`**: An array of paths to images used in the cover carousel section of the website. These images can be local paths or URLs to images hosted externally. For example:

   - Local Path: `"coverPictures/cover.jpg"`
   - External URL: `"https://www.example.com/image.jpg"`

4. **`ourYoutubeVideoEmbeds`**: An array of YouTube video embed URLs displayed in the video carousel section of the website.

5. **`ourBandMembersPhotoPaths`**: An array of paths to images of the band members displayed on the website. These images can be local paths or URLs to images hosted externally. For example:

   - Local Path: `"ourBandMembers/LeadSinger.jpg"`
   - External URL: `"https://www.example.com/image.jpg"`

6. **`ourBandMembersNames`**: An array of names of the band members.

7. **`ourBandMembersRoles`**: An array of roles or positions of the band members (e.g., lead singer, guitarist).

8. **`ourBandMembersLinks`**: An array of URLs to the band members' social media profiles or personal websites.

9. **`ourPricingHours`**: The estimated number of hours the band will play.

10. **`ourPricingPrice`**: The estimated price for the band's services.

11. **`ourSponsors`**: A boolean value (`true` or `false`) indicating whether the sponsors section should be displayed on the website.

12. **`ourSponsorsLogoPaths`**: An array of paths to images of sponsor logos displayed in the sponsors section of the website.

13. **`facebook`**, **`instagram`**, **`xtwitter`**, **`google`**, **`youtube`**, **`soundcloud`**: URLs to the band's social media profiles on Facebook, Instagram, Twitter, Google, YouTube, and SoundCloud, respectively.

14. **`additionalSocialLinks`**: A boolean value (`true` or `false`) indicating whether additional social media links should be displayed on the website.

15. **`additionalSocialLinksList`**: An array of objects containing additional social media links for the band. Each object should have a `text` key for the display text and a `link` key for the URL.

16. **Referencing External Links**: To reference external links for cover pictures and band member photos, simply provide the full URL as the value. For example:

   ```json
   "coversPicturesPaths": [
     "https://www.example.com/image1.jpg",
     "https://www.example.com/image2.jpg",
     "https://www.example.com/image3.jpg"
   ],
   "ourBandMembersPhotoPaths": [
     "https://www.example.com/member1.jpg",
     "https://www.example.com/member2.jpg",
     "https://www.example.com/member3.jpg"
   ]
   ```

   Replace `"https://www.example.com/image1.jpg"`, `"https://www.example.com/image2.jpg"`, `"https://www.example.com/image3.jpg"` with the actual URLs of the images you want to use as cover pictures, and replace `"https://www.example.com/member1.jpg"`, `"https://www.example.com/member2.jpg"`, `"https://www.example.com/member3.jpg"` with the actual URLs of the band member photos.

### Text File Usage in Website Updates

The `ourBandDescription.txt`, `ourBandName.txt`, and `OurPricingDescription.txt` files are used to update specific details on the website. Here's how they are utilized:

1. **`ourBandDescription.txt`**: This file contains the description or bio of the band. The content of this file is fetched and displayed on the website to provide visitors with information about the band. This text can include symbols and special characters, allowing for rich formatting and detailed descriptions.

2. **`ourBandName.txt`**: This file contains the name of the band. The content of this file is fetched and displayed in various sections of the website, such as the navigation bar and title, to identify the band. Similar to the description, the band name can include symbols and special characters for unique styling.

3. **`OurPricingDescription.txt`**: This file contains the description of the band's pricing or services. The content of this file is fetched and displayed on the pricing section of the website to inform visitors about the band's pricing structure. Symbols and special characters can be used here to highlight key points or details about the pricing.

By using these text files, the website can dynamically update its content based on the text provided in these files, allowing for easy management and customization of the website's details without needing to modify the website's code directly.
