//Query selectors
const navbar = document.querySelector('.navbar');
const list = document.querySelector('.list');
const elements = document.querySelectorAll('.element');
const slideImage = document.querySelector('.slide_image');
const examples = document.querySelectorAll('.example');
const motivationTitle = document.querySelector('.motivation_title');
const motivationParagraph = document.querySelector('.motivation_paragraph');
const motivationImage = document.querySelector('.motivation_img');




window.addEventListener('scroll', () => {
    navbar.classList.toggle('scroll_active', window.scrollY > 0)
})




elements.forEach((element) => {
    element.addEventListener('click', (e) => {
        const active = document.querySelector('.active');
        if(active) {
            active.classList.remove('active');
          }
          e.target.classList.add('active');

        //Switch images based on which section was clicked
        if (e.target.classList.contains('1')) {
            slideImage.src = 'img/1-diag_flowchart-720x457@2x-min.png';
        }
        if (e.target.classList.contains('2')) {
            slideImage.src = 'img/2-software_system_design-720x457@2x-min.png';
        }
        if (e.target.classList.contains('3')) {
            slideImage.src = 'img/3-process_mapping-720x457@2x-min.png';
        }
        if (e.target.classList.contains('4')) {
            slideImage.src = 'img/4-org_chart-720x457@2x-1-min-2.png';
        }
        if (e.target.classList.contains('5')) {
            slideImage.src = 'img/5-agile_planning-720x457@2x-min.png';
        }
    })
});




examples.forEach((example) => {
    example.addEventListener('click', (e) => {
        const exampleActive = document.querySelector('.example_active');
        if(exampleActive) {
            exampleActive.classList.remove('example_active');
          }
          example.classList.add('example_active');
          if (example.classList.contains('1')) {
            motivationImage.src = 'motivation_img/value-prop-number-1.png';
            motivationTitle.innerText = 'Yes, you should diagram';
            motivationParagraph.innerText = 'Anyone, in any industry and any role, can use Lucidchart. After all, everyone has been drawing out ideas since childhood.  We make it easy to create powerful visuals to improve how you do business. Get a head start with over 500 templates, or drag and drop from our shape library to customize our diagram.'
        }
         if (example.classList.contains('2')) {
             motivationImage.src = 'motivation_img/number-2.png';
             motivationTitle.innerText = 'Make diagrams smarter with data';
             motivationParagraph.innerText = 'When you know, you can act. Bring together diagrams and data visualization to create an actionable view. Import data from Excel, Zapier, Salesforce, LinkedIn Sales Navigator, and more, or use automated layout to generate a diagram from data.'
         }
         if (example.classList.contains('3')) {
             motivationImage.src = 'motivation_img/value-prop-number-3.png';
             motivationTitle.innerText = 'Build a shared perspective';
             motivationParagraph.innerText = 'Real-time collaboration gives your business an edge. Now you can get everyone on the same page even if they are on different devices or operating systems. Work together to receive feedback quickly, whether your co-workers are in the same office or spread around the world.'

         }
         if (example.classList.contains('4')) {
             motivationImage.src = 'motivation_img/value-prop-number-4.png';
             motivationTitle.innerText = 'Works where you work';
             motivationParagraph.innerText = 'Enrich your existing applications when you integrate Lucidchart with leading productivity platforms such as GSuite, Atlassian, Slack, Salesforce, and Microsoft Office. With support across all major operating systems and native mobile apps, you can always move your business forward.'
         }
         if (example.classList.contains('5')) {
             motivationImage.src = 'motivation_img/value-prop-number-5.png';
             motivationTitle.innerText = 'Scale your enterprise';
             motivationParagraph.innerText = 'When you know, you can act. Bring together diagrams and data visualization to create an actionable view. Import data from Excel, Zapier, Salesforce, LinkedIn Sales Navigator, and more, or use automated layout to generate a diagram from data.'
         }
    })
})


