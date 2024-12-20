# Module 11 - Lesson 5 - Integrating Bootstrap with React

## 1. Enhancing HomePage with React-Bootstrap

**Objective**: The aim of this assignment is to enhance the visual appeal and usability of a HomePage component for an application using React-Bootstrap. You will focus on integrating React-Bootstrap components, specifically Buttons, Cards, and applying styling for Colors, Borders, and Shadows to create a more engaging user interface.

**Problem Statement**: Based on a basic HomePage component for any application, your task is to enhance this component using React-Bootstrap, improving its visual presentation and user interaction. You will incorporate buttons for actions, apply color schemes, add borders, utilize shadows for depth, and introduce cards to display content, aiming to create a more attractive and user-friendly page.

### Task 1: Integrating React-Bootstrap and Adding Buttons

- First, ensure React-Bootstrap is installed in your project: npm install react-bootstrap bootstrap.
- Import the necessary React-Bootstrap components into your HomePage component.
- Add a primary button labeled "Shop Now" that represents the main call to action (CTA) for users. 

**Expected Outcome**: The HomePage component should render with a "Shop Now" button styled with React-Bootstrap's primary variant.

### Task 2: Applying Color Scheme

- Customize the background color of the HomePage component to improve visual appeal.
- Apply a text color that complements the background, ensuring good readability. 

**Expected Outcome**: The HomePage component's background and text colors are updated, enhancing visual contrast and readability.

### Task 3: Enhancing UI with Borders, Shadows, and Cards

- Add a border to the HomePage component for better definition.
- Utilize shadows on the "Shop Now" button to create a sense of depth and focus.
- Introduce React-Bootstrap's Card component to display additional content or information on the HomePage. 

**Expected Outcome**:
- The HomePage component features distinct borders and shadows, enhancing its aesthetic and emphasizing the "Shop Now" button.
- Utilize the Card component to display additional content or information, such as featured products or promotions.

### Task 4: Adding a Responsive Image to HomePage

- Select an image that represents the theme of your application. For demonstration purposes, assume the image is located in your project at src/assets/welcome-image.jpg.
- Import the Image component from React-Bootstrap and use it to add the chosen image to your HomePage component.
- Apply React-Bootstrap's responsive image features to ensure the image scales nicely on different screen sizes.

**Expected Outcome**:
- The HomePage component should now display the chosen image above or below the welcome message.
- The image should be responsive, adjusting its size according to the screen width without distorting its aspect ratio.

## 2. Enhancing the NotFound Component with React-Bootstrap

**Objective**: The purpose of this assignment is to enhance the visual and navigational aspects of a NotFound component in a React application. By utilizing React-Bootstrap, you will incorporate colors, grids, images, and navigation links to create a more engaging and informative "404 - Not Found" page.

### Task: Improving NotFound Component 

- Enhance the user experience of a NotFound component by applying React-Bootstrap features including colors for text, a grid layout for better structure, an engaging image to soften the error message, and clearer navigation options using React-Bootstrap's NavLink component.

#### Integrate React-Bootstrap:

- Ensure React-Bootstrap is installed in your project (npm install react-bootstrap bootstrap).
- Import necessary components (Container, Row, Col, Image, Button) from React-Bootstrap.

#### Apply a Color Scheme:

- Use React-Bootstrap utilities to apply a color scheme that matches your app's design. Focus on text colors and backgrounds to make the NotFound page visually appealing.

#### Structure Content with Grid:

- Use the Container, Row, and Col components to structure the message and image within a grid layout, ensuring content is well-organized and responsive.

### Add an Engaging Image:

- Include a friendly or humorous image related to navigation errors. This image should be responsive and fit well within the grid layout.

#### Enhance Navigation with NavLink:

- Replace the <Link> component with React-Bootstrap's NavLink for better styling and integration. Ensure the navigation back to the homepage is clear and inviting.

**Expected Outcome**:

- The NotFound component should present a structured, visually appealing "404 - Not Found" page with a clear color scheme.
- Content should be organized in a responsive grid layout, enhancing readability and aesthetics on different screen sizes.
- An engaging image is displayed, reducing the frustration typically associated with error pages.
- Navigation back to the homepage is facilitated by a styled NavLink, encouraging users to continue browsing the site.
