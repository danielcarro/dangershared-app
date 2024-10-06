# DangerShared App

## Project Description
**DangerShared App** is a mobile application developed in **React Native** that allows users to report small fire and floods outbreaks in real time. Through the application, users can record a video of the fire or the flood location, send the video along with their GPS coordinates, and this information will be processed by an API that stores it in a database. The data is then forwarded to the appropriate authorities to take necessary action.

## Main Features
- **Video Capture**: Users can record up to 30 seconds of video showing the fire or the flood outbreak.
- **Location Sending**: The user’s location is automatically sent along with the video.
- **API Integration**: The video and location data are sent to an API that manages the data and notifies the relevant authorities.
- **Authority Notification**: Information about the incident is sent directly to the responsible firefighting or emergency services.

## Databases
NASA Earthdata (API from LP DAAC - Land Processes Distributed Active Archive Center) and POWER Data API (Prediction of Worldwide Energy Resources) to identify temperatures, relative humidity, and through their sensorious remote on the soil cover and vegetation data also identifying the bioma of the location and compare similar scenarios using previous climate information .
NASA's Global Forest Canopy Height (API from GEDI) to identify the height of the forest in the region and understand the level of deforestation.
NASA Earthdata (Hydrosphere - Precipitation, Rivers and Fluvial Waters) - To identify river flows
NASA FIRMS (Fire Information for Resource Management System) to monitorate fire history
NASA Global Flood Monitoring System (GFMS) to check on the information about floods
USGS Water Services and ANA - SNIRH to identify water reservoirs

## Technologies Used
- **React Native**: Used for the development of the user interface and application functionalities.
- **Expo**: Used to facilitate development and manage dependencies in React Native.
- **Styled-Components**: For styling the interface.
- **TypeScript**: For static typing in the project, improving readability and maintainability of the code.
- **REST API**: The app communicates with an external API to send data.
- **Geolocation**: To automatically capture the user’s location.

## How to Clone and Install the Application

### Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org) (recommended version: LTS)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Git

### Steps to Clone the Repository

1. Open the terminal or command prompt on your machine.

2. Run the following command to clone the repository:

   ```bash
   git clone https://github.com/your-username/dangershared-app.git


In the project directory, you can install:

### `npm Install`

In the project directory, you can run:

### `npm expo start`
