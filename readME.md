# Adolla Share

This project allows you to share your files from one device to another using a HTTP Server.

**_NOTE_** => While starting the app make sure to have a internet connection. Once you've both the server and client running, you _should_ turn off your internet connection because it'll consume your data to transfer the files.

---

## Setup Guide

- This guide will be focused on how to run the project in VSCode.

1. Clone the repository into your local machine.
2. Open a split terminal in VSCode.
3. Now in first terminal type command `cd server` to change the working directory to `server` and run the command `cd client` in the second terminal for changing its working directory to `client`.
4. Now simultaneously run the command `npm install` in both the terminals.

### Server Setup:

- Run the following steps in terminal opened for `server` directory.

5. Just simply run the `npm run dev` command in the terminal. If you see `Server listening on port 8082...` it means the server is up and running.

### Client setup

- Run the following steps in terminal opened for `client` directory.

6. Run the command `npm run dev` in the terminal.
7. Open up the browser and in searchbar search for `http://localhost:3000/`.
