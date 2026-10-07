var jsonData = [
    {
       "Name":"Peter",
       "Job":"Programmer"
    },
    {
       "Name":"John",
       "Job":"Programmer"
    },
    {
       "Name":"Kevin",
       "Job":"Scientist"
    }
 ]
var htmlTemplate = 
    '<div class="team-item">'+        
        '<div class="team-item-image">'+            
            '<img src="images/team/team-1.jpg" alt="" />'
               '<div class="team-item-detail">'+                
                '<h4 class="font-alt normal">Hi!</h4>'+
                '<p>Heeeeyyy I’m Alisa, a mother of 3 beautiful children!. A nail artist loving what I do & living my best nail life!. I came into this experience at Mainstream eleven months ago excited to learn and grow. Now here we are 11 months later and I can not believe the progress. Not only mine but the lovely ladies I share each day with. I’m soooo excited to see what the next year, 2 yrs, 3 yrs etc will hold!!... Can’t wait to meet you all who are just as excited about the experience you are going to receive at Mainstream ;) Before I came to mainstream I did basic nails (mani’s & pedi’s). A little nail art here and there. I have been at Mainstream a little over a year and with the help of Melly and the ladies I have become the artist I had only dreamed about!. Everyday single day is learning experience and with thanks given to our Heavenly Father & Mother I know that I am only going to keep growing!. '+
                '</p>'+                
            '</div>'+
        '</div>'+
        
        '<div class="team-item-descr font-alt">'+
            
            '<div class="team-item-name">'+
                '{0}'
            '</div>'+
            
            '<div class="team-item-role">'+
                '{1}'
            '</div>'+
            
        '</div>'+
        
    '</div>'
var newHtml = ''
var container;
var tempContainer;

data = JSON.parse(jsonData);

var addPeople = function(){
    for (var i = 0; i < data.length; i++) {
        newHtml = htmlTemplate.replace('{0}', data[i].Name).replace('{1}', data[i].Job)
        
        container = $('#people');
        container.append(newHtml);
    }
};

$('document').ready(function() {
    addPeople();
});