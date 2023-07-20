let projectData = [
    {
        // done
        image: 'img/project-1.png',
        name: 'Onine color picker',
        detail: 'The Online Color Picker Website is a user-friendly and interactive web application designed to assist users in choosing and exploring colors for various purposes, such as web design, graphic design, digital art, and more. It provides a convenient platform for users to experiment with different color combinations, find the perfect shades, and obtain color codes for their projects.',
        github: 'https://github.com/faizan-12345/Online-Color-picker',
        live: 'https://faizan-12345.github.io/Online-Color-picker/',
        tags: '#javascript,#css,#HTML',
        width: "251px",
    height: "250px",
    },
    {
        // done
        image: 'img/project-2.png', 
        name: 'Food order landing page',
        detail: 'The FoodOrder Landing Page project aims to design and develop a visually appealing and user-friendly web page that serves as a gateway for customers to explore and place orders for delicious meals. The landing page will showcase a variety of cuisines, enticing dishes, and attractive offers, enticing visitors to become customers.',
        github: 'https://github.com/faizan-12345/food-order-landing-page-html-css-js',
        live: 'https://faizan-12345.github.io/food-order-landing-page-html-css-js/',
        tags: '#javascript, #css, #HTML',
        width: '253px',
        height: '250px',
    },
    {
        // done
        image: 'img/project-3.png',
        name: 'Weather App',
        detail: 'The Weather Website is an online platform that provides up-to-date weather information and forecasts for various locations worldwide. It offers users a convenient way to check current weather conditions, temperature, precipitation, wind speed, humidity, and forecasts for the upcoming days. The website aims to deliver accurate and reliable weather data to help users plan their activities, make informed decisions, and stay prepared for changing weather conditions.',
        github: 'https://github.com/faizan-12345/weather-App',
        live: 'https://faizan-12345.github.io/weather-App/',
        tags: '#javascript, #css, #HTML',
        width: "248px",
    height: '250px',
    },
    {
        // done
        image: 'img/project-4.gif',
        name: 'Movie guide web',
        detail: 'The Movie Guide Website is a comprehensive online platform that serves as a one-stop destination for movie enthusiasts to discover, explore, and stay up-to-date with the latest movies, TV shows, and entertainment content. The website provides users with a rich database of movie information, including plot summaries, trailers, cast and crew details, ratings, reviews, and showtimes, making it an indispensable tool for movie lovers.',
        github: 'https://github.com/faizan-12345/movie-guide-app',
        live: 'https://movie-guide-web.netlify.app/',
        tags: '#javascript, #css, #HTML'
    },
    {
        // done
        image: 'img/project-5.jpg',
        name: 'calculator',
        detail: 'The Calculator Web Application is a user-friendly and functional online tool designed to perform basic arithmetic calculations swiftly and accurately. This web application provides a simple and intuitive interface that allows users to perform addition, subtraction, multiplication, division, and more with ease. It is a versatile tool suitable for both quick calculations and more complex mathematical operations.',
        github: 'https://github.com/faizan-12345/Calculator',
        live: 'https://faizan-12345.github.io/Calculator',
        tags: '#javascript, #css, #HTML',        
    width: "249px",
    height: "250px",

    },
    {
        // done
        image: 'img/project-6.avif',
        name: 'Quiz App',
        detail: 'The Quiz Web Application is an interactive and engaging online platform that allows users to participate in quizzes, tests, and assessments on various subjects and topics. This web application provides an entertaining and educational experience, enabling users to test their knowledge, learn new information, and track their progress over time. It caters to a diverse audience, including students, professionals, and individuals looking for fun challenges.',
        github: 'https://github.com/faizan-12345/quiz-app-js',
        live: 'https://faizan-12345.github.io/quiz-app-js/',
        tags: '#javascript, #css, #HTML',
        width: "249px",
        height: "252px",
    },
    {
        // done
        image: 'img/project-7.png',
        name: 'Rock Paper Scissor',
        detail: 'The Rock Paper Scissors Game Website is an entertaining and interactive online platform that brings the classic hand game to the digital world. This web application allows users to play the iconic rock-paper-scissors game against the computer, challenging their luck and strategic thinking. The website offers a simple yet enjoyable gaming experience suitable for players of all ages.',
        github: 'https://github.com/faizan-12345/Rock_Paper_scissor-JS',
        live: 'https://faizan-12345.github.io/Rock_Paper_scissor-JS/',
        tags: '#javascript, #css, #HTML',
        height: "249px",
    width: "251px",
    },
    {
        // done
        image: 'img/project-8.jfif',
        name: 'Online shopping mart Design',
        detail: 'The Online Shopping Mart is an e-commerce website designed to provide users with a seamless and enjoyable online shopping experience. It aims to attract customers with an appealing design, user-friendly interface, and a wide range of products. The website caters to various product categories and ensures smooth navigation, secure transactions, and efficient order processing.',
        github: '#',
        live: 'https://faizan-online-store.netlify.app/',
        tags: '#css, #HTML, #javascript, #React.js',
        height: "258px",
        width: "250px",
    },
    {
        image: 'img/project-9.gif',
        name: 'Tic Tae Toe',
        detail: 'The Tic-Tac-Toe Web Application is a classic and popular two-player game designed for a web-based platform. This simple yet engaging game is a perfect way to challenge friends, family, or even AI opponents in a battle of wits. The web application provides a user-friendly interface that allows players to take turns and enjoy the nostalgic experience of this timeless game.',
        github: 'https://github.com/faizan-12345/Tic-Tae-Toe-JS',
        live: 'https://faizan-12345.github.io/Tic-Tae-Toe-JS/',
        tags: '#css, #HTML, #javascript',
        width: "250px",
    height: "250px",
    },
]

// creating project cards in frontend

const createProjectCards = (data) => {
    let projectContainer = document.querySelector('.project-container');

    projectContainer.innerHTML += `
    <div class="project-card" data-tags ="${data.tags}">
                <div class="project-wrapper">
                    <div class="project-thumbnail">
                        <img src="img/close.png" class="close-btn" alt="">
                        <img src="${data.image}" class="project-img" style="width: ${data.width}; height: ${data.height};" alt="">
                        <span class="tags">${data.tags}</span>
                    </div>
                    <div class="project-body">
                        <h1 class="project-name">${data.name}</h1>
                        <p class="project-detail">${data.detail}</p>
                        <a href="${data.github}" class="btn">github</a>
                        <a href="${data.live}" class="btn">see live</a>
                    </div>
                </div>
            </div>
    `
}

projectData.forEach(data => createProjectCards(data));