# 0xbatch3rs:
Batchers is a platform for sharing and interacting with `.bat` file scripts. Users can browse without logging in but need authentication to upload scripts. Features include customizable profiles, a code editor with theme options, script interactions (like, dislike, report), comments, and nested discussions. Users can follow others, receive notifications, and see featured scripts based on likes.


## Tech Stack:
- **Next.js**: Frontend & Backend
- **Next-Auth**: Authentication and Authorization
- **Tailwind CSS**: A utility-first CSS framework
- **React Query**: State management
- **Supabase**: Database


## Features:
1. **Browsing Without Authentication**  
   - Users can explore the platform and browse scripts without logging in.

2. **Uploading `.bat` Files**  
   - Authentication is required for uploading `.bat` files.

3. **Login and Signup**  
   - Login options include:
     - Guest login
     - Authentication via Google, GitHub, or X.
   - Signup process includes a second step where users provide:
     - Avatar with some pre defined avatar
     - First Name  
     - Last Name  
     - Username  

4. **User Profile**  
   - Displays the following details:
     - First Name, Last Name, Username, and Email.  
     - Total scripts uploaded, total likes, total comments.  
     - Favourite script.  
     - User's uploaded scripts.  
     - User's comments.
     - Account creation date ("Cake Day").  

5. **Theme Customization**  
   - Users can change the color theme of the code editor.

6. **Search Functionality**  
   - Search for scripts and users effectively.

7. **Script Interactions**  
   - Upload `.bat` files.  
   - React to scripts with:
     - Thumbs up 👍  
     - Thumbs down 👎  
     - Report as malicious 💀  
   - Add scripts to favourites.  
   - Download `.bat` files or copy their content.

8. **Comments and Reactions**  
   - Comment on scripts.  
   - React to comments with emojis.  
   - Nested comments for threaded discussions.

9. **Featured Scripts**  
   - Scripts with the most likes are displayed as "Featured Scripts" on top.

10. **Following and Notifications**  
    - Users can follow other users.  
    - Receive notifications when followed users upload new scripts.


## Database Schema:



## References
- https://h4cker.framer.website 
- https://v0.dev/chat/Yr3DQwwOgo3?b=b_1kM6mnLDFM6&f=0 
- https://glitch-text-component.vercel.app

<!-- 
https://supabase.com/docs/guides/auth/server-side/nextjs
https://supabase.com/docs/guides/auth/server-side
-->


- Login/Signup intercept routechanges

- **Pagination + Infinite Scroll**: Load initial feed, fetch next page on scroll near end.
- **Feed Order**: Followed users' latest scripts → Trending (24h) → Recent uploads → Most commented → Randomized.
- **Sorting**: Fixed order for top sections, randomized in last section.
- **Performance**: API Batching, debounce scroll, cache responses, search debounce.