let body = document.querySelector('body');


let warningContainer = document.createElement('div');
warningContainer.innerHTML = `  
<div style="
            background-color: red;
            color: white;
            text-align: center;
            font-size: 16px;
            padding: 25px;
            width: 100%;
            z-index: 50000;
">
    <p>This is an <b>unofficial</b> and community-driven proposal for the <a href="https://eco.com">Eco.com</a> website. This translation can be misleading or incorrect.<br>
        If you find misleading, incorrect, or missing content and you want to contribute, please check: https://github.com/eco-translations/eco-translations.github.io
    </p>
    <p>For the <b>official</b> content in English, please <b>visit the official website at <a href="https://eco.com">Eco.com</a> </b> </p>
</div>
`;
body.insertBefore(warningContainer, body.firstChild);
