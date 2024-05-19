# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Project Name
Job-verse

## Technology Stack

I have utilized the following tech stack for the assignment:
- ReactJs
- Redux
- Redux Toolkit
- CSS
- Material UI
- React-infinite-scroll

- Reference UI: [dashboard](https://drive.google.com/file/d/1YMbZDo6GHIpHRSnigklspSUG_KZfWdM7/view)
- API: [https://api.weekday.technology/adhoc/getSampleJdJSON](https://api.weekday.technology/adhoc/getSampleJdJSON)
Method: Post

## Null Values Handling

Utilized conditional rendering for the components, hence if a particular data is not present in that job description, corresponding elements would not be rendered in UI e.g. min Experience, min Salary, etc.

## Components

### Job Cards

Each job listing should be displayed as a card containing the following information:
- Job title
- Company name
- Location
- Job description (limited to a certain number of characters with an option to expand)
- Experience required
- Apply button/link

### Filters

Implement filters to allow users to refine the job listings based on:
- Min experience
- Company name
- Location
- Remote/on-site
- Tech stack
- Role
- Min base pay

**Note:** Since the API provided only allowed POST method, the filters are applied on frontend. The API did not contain values for the below fields, hence the filters for them are dummy:
- Number of employees
- Remote

### Infinite Scroll

Implement infinite scroll to load additional job listings as the user scrolls down the page. The platform should fetch and display more jobs automatically without requiring the user to click on a "Load More" button.

### Responsive Design

Ensure that the platform is responsive and works well on different screen sizes, including mobile devices (Optional)



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
