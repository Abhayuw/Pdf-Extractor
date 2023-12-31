# PDF Extractor Web Application

This comprehensive README provides a detailed guide for setting up, running, and understanding the PDF Extractor Web Application. This fullstack web application enables users to upload a PDF file, view its pages, select specific pages for extraction, and create a new PDF based on the selected pages. Below, you'll find a thorough breakdown of each aspect of the project.

[Live Hosted on Vecel and Render](https://pdf-extractor-lsct.vercel.app/)

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Frontend](#frontend)
  - [Folder Structure](#folder-structure)
  - [React Component Overview](#react-component-overview)
- [Backend](#backend)
  - [Folder Structure](#folder-structure-1)
  - [API Overview](#api-overview)
- [Usage](#usage)
- [API Documentation](#api-documentation)
  - [File Upload API](#file-upload-api)
  - [File Retrieval API](#file-retrieval-api)
  - [PDF Extraction API](#pdf-extraction-api)
- [Testing](#testing)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features <a name="features"></a>
The PDF Extractor Web Application includes the following features:

### Frontend (React) <a name="frontend"></a>
- **File Upload Form:** <a name="file-upload-form"></a>
  - A user-friendly form allows users to upload a PDF file.
  - File validation ensures that only PDF files are accepted.

- **PDF Page Viewer:** <a name="pdf-page-viewer"></a>
  - A visual representation displays all pages within the uploaded PDF.

- **Page Selection:** <a name="page-selection"></a>
  - Users can select specific pages they want to extract using checkboxes or a similar UI element.

- **New PDF Creation:** <a name="new-pdf-creation"></a>
  - Users can create a new PDF based on the selected pages.
  - The application provides a download link to access the newly generated PDF.

- **Responsiveness:** <a name="responsiveness"></a>
  - The application is responsive, making it accessible from various devices, including mobile devices.

### Backend (Node.js) <a name="backend"></a>
- **File Upload API:** <a name="file-upload-api"></a>
  - Provides a REST API to handle the upload of PDF files.
  - Uploaded files are stored on the server for future processing.

- **File Retrieval API:** <a name="file-retrieval-api"></a>
  - Offers a REST API to retrieve and display stored PDF files.

- **PDF Extraction API:** <a name="pdf-extraction-api"></a>
  - Implements a REST API to extract selected pages from the original PDF and create a new PDF.
  - Utilizes a PDF library (of your choice) to perform PDF manipulation.

- **User Authentication:** <a name="user-authentication"></a>
  -User authentication is under implementation, allowing users to manage their own sets of PDF files.
  -currently it uses Web Tokens via firebase.

- **Page Rearrangement:** <a name="page-rearrangement"></a>
  - Users can rearrange the order of selected pages in the new PDF for added customization.

## Technologies Used <a name="technologies-used"></a>
The application utilizes the following technologies:

### Frontend <a name="frontend-technologies"></a>
- React js
- HTML/CSS for styling
- [react-pdf] library for rendering PDF pages.

### Backend <a name="backend-technologies"></a>
- Node.js (or any preferred Node.js framework, e.g., Express.js)
- Multer for handling file uploads
- [Pdf-lib] (for PDF manipulation)

## Getting Started <a name="getting-started"></a>
Here's a detailed guide on getting the project up and running on your local machine.

### Prerequisites <a name="prerequisites"></a>
- Node.js and npm/yarn installed on your machine.
- install [react-pdf] for frontend, and [pdf-lib] for backend.

### Installation <a name="installation"></a>
 **Clone the Repository:** <a name="clone-repository"></a>
   bash
   git "clone https://github.com/Abhayuw/Pdf-Extractor "
   cd pdf-extractor

1. Frontend Setup: <a name="frontend-setup"></a>

Navigate to the frontend directory: <a name="navigate-to-frontend"></a>
cd pdf-extractor-app

Install dependencies:
npm install

Start the frontend application:
npm start

2.Backend Setup: <a name="backend-setup"></a>

Navigate to the backend directory:
cd pdf-extractor-apis

Install dependencies:
npm install

Start the backend server: 
npm start

 **Frontend** <a name="frontend"></a>

**Folder Structure** <a name="folder-structure"></a>
Here's a breakdown of the key directories and files in the frontend folder:

- **src/**: Contains the application source code.
- **upload-components/**: Contains service modules for making API requests.
- **route-components/**: Containes components for routed modules. 
- **App.js**: The main application component.
- **context**:Contains modules for contex provider/global state provider.

**React Component Overview** <a name="react-component-overview"></a>
- **UploadForm**: Makes the POST request for uploading form.
- **PDFViewer**: Displays the visual representation of PDF pages.
- **PageSelection**: Allows users to select pages for extraction.
- **GeneratePdf**: Handles the creation of a new PDF based on selected pages.
- **App**: The main application component that combines the above components.

**Backend** <a name="backend"></a>

**Folder Structure** <a name="folder-structure-1"></a>
Here's a breakdown of the key directories and files in the backend folder:

- **pdf-extractor-apis/**: Contains the backend source code.
- **middlewares/**: Contains middleware functions.
- **routes/**: Defines API routes.
- **uploads/shared/**: The directory where unauthorised uploaded PDF files are stored.
- **app.js**: The main application file that sets up the Express app.

**API Overview** <a name="api-overview"></a>

**File Upload API** (`/upload-shared`): <a name="file-upload-api"></a>
- **Endpoint:** `/upload-shared`
- **Method:** POST
- **Request Body:** FormData containing the PDF file.
- **Response:** JSON containing the uploaded file information.

**File Retrieval API** (`/retrieve-pages`): <a name="file-retrieval-api"></a>
- **Endpoint:** `/retrieve-pages`
- **Method:** GET
- **Query Parameters:** `filename` (string), `pageNumbers` (string of comma-separated page numbers)
- **Response:** PDF file for download.

**Usage** <a name="usage"></a>

**Protected Uploads (Under Development)** <a name="protected-uploads"></a>

The following endpoint is still under construction/development and requires authentication:

**Protected File Upload API** (`/upload-protected`):
- **Endpoint:** `/upload-protected`
- **Method:** POST
- **Authentication:** Check if the user is authenticated.
- **Request Body:** Multipart form data containing the PDF file.
- **Response:** JSON containing a success message.

**Important Note:** The protected uploads endpoint is currently under development and will require authentication to upload PDF files securely.

**Usage** <a name="usage"></a>

To use the PDF Extractor Web Application, follow these steps:

1. **Frontend Setup**:
   - Navigate to the `frontend` directory:
     ```bash
     cd frontend
     ```

   - Install frontend dependencies:
     ```bash
     npm install
     ```

   - Start the frontend application:
     ```bash
     npm start
     ```

2. **Backend Setup**:
   - Navigate to the `backend` directory:
     ```bash
     cd backend
     ```

   - Install backend dependencies:
     ```bash
     npm install
     ```

   - Start the backend server:
     ```bash
     npm start
     ```

3. **Access the Application**:
   - Open your web browser and access the application at `http://localhost:10000` (or the specified port if different).

4. **File Upload**:
   - Use the provided file upload form on the web application's interface to upload a PDF file.
   - Ensure that the uploaded file is in PDF format.

5. **View PDF Pages**:
   - After uploading, the web application will display a visual representation of all the pages in the PDF.

6. **Select Pages for Extraction**:
   - Use the provided UI elements (e.g., checkboxes) to select specific pages you want to extract.

7. **Create a New PDF**:
   - Click the button or perform the action to create a new PDF based on your selected pages.

8. **Download the New PDF**:
   - Once the new PDF is generated, the application will provide a download link.
   - Click the link to download the newly created PDF to your local machine.

9. **Protected Uploads (Under Development)**:
   - If you are using the protected uploads feature (still under development), ensure that you are authenticated before attempting to upload PDF files.

10. **Error Handling**:
    - If you encounter any issues during usage, the application provides error messages and status codes to help diagnose and resolve problems.

**Important Note:** The protected uploads endpoint is currently under development and will require authentication to upload PDF files securely.


**API Documentation** <a name="api-documentation"></a>

Here are the details of the APIs available in the PDF Extractor Web Application:

1. **File Upload API** <a name="file-upload-api"></a>

   - **Endpoint:** `/upload-shared`
   - **Method:** POST
   - **Request Body:** FormData containing the PDF file.
   - **Response:** JSON containing the uploaded file information.
   
   Use this API to upload a PDF file to the server.

2. **File Retrieval API** <a name="file-retrieval-api"></a>

   - **Endpoint:** `/retrieve-pages`
   - **Method:** GET
   - **Query Parameters:** `filename` (string), `pageNumbers` (string of comma-separated page numbers)
   - **Response:** PDF file for download.
   
   This API allows you to retrieve specific pages from a stored PDF file based on the provided query in parameters an specific order.

3. **PDF Extraction API** <a name="pdf-extraction-api"></a>

   - **Endpoint:** `/api/extract`
   - **Method:** POST
   - **Request Body:** JSON with selected page numbers and other relevant data.
   - **Response:** JSON with information about the newly created PDF.
   
   Use this API to extract selected pages from the original PDF and create a new PDF file.

**Important Note:** The "File Upload API" and "File Retrieval API" are used for handling PDF files, while the "PDF Extraction API" is used to extract specific pages from the uploaded PDF. These APIs are essential components of the PDF Extractor Web Application.
**Deployment** <a name="deployment"></a>

To deploy the PDF Extractor Web Application to a live server, follow these general steps:

1. **Choose a Hosting Provider**: Select a hosting provider for your application. Common choices include cloud platforms like AWS, Heroku, or VPS providers like DigitalOcean.

2. **Set Up a Server**: Provision a server instance with the necessary resources, such as CPU, memory, and storage.

3. **Domain Configuration**: If you have a custom domain, configure your domain's DNS settings to point to your server's IP address.

4. **Server Configuration**: Set up the server environment with the required dependencies, including Node.js, any PDF libraries, and database configurations if needed.

5. **Clone Repository**: Clone your application's repository to the server using Git.

6. **Environment Variables**: Set up environment variables for your application, such as database connection strings, API keys, and any other configuration needed for production.

7. **Build Frontend**: Build the frontend of your application for production using your chosen build tool (e.g., `npm run build`).

8. **Start Backend**: Start the backend server in production mode.

9. **Reverse Proxy**: If using a web server like Nginx or Apache, configure a reverse proxy to route incoming requests to your Node.js backend.

10. **Secure Server**: Enable HTTPS for secure communication. You can use Let's Encrypt for free SSL certificates.

11. **Monitor and Scale**: Implement monitoring tools and scaling strategies as needed to ensure your application's performance and reliability.

**Screenshots** <a name="screenshots"></a>

Here are some screenshots of the PDF Extractor Web Application in various states:

- [Screenshot 1: Landing Page](/Screenshots/Landing_page.png)
- [Screenshot 2: File Upload Form](/Screenshots/File_upload.png)
- [Screenshot 3: PDF Page Viewer](/Screenshots/Pdf_page_viewer.png)
- [Screenshot 4: Page Selection](/Screenshots/Page_selection.png)
- [Screenshot 5: New PDF Creation](/Screenshots/Download_generated_pdf.png)

**Contributing** <a name="contributing"></a>

If you would like to contribute to the development of the PDF Extractor Web Application, please follow these guidelines:

1. Fork the repository to your GitHub account.
2. Clone the forked repository to your local machine.
3. Create a new branch for your feature or bug fix.
4. Make your changes and ensure that your code adheres to the project's coding standards.
5. Write tests for your code if applicable.
6. Commit your changes with clear and concise commit messages.
7. Push your changes to your forked repository.
8. Create a pull request (PR) from your branch to the main project repository.
9. Ensure that your PR includes a clear description of the changes you've made and why they are necessary.
10. The project maintainers will review your PR, provide feedback, and merge it if it meets the project's standards.

**License** <a name="license"></a>

The PDF Extractor Web Application is open-source software licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this software following the terms of the MIT License. See the [LICENSE](LICENSE) file for the full text of the license.



