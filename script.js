function getRandomResponse() {
    const responses = [
      "The word nerd was first coined by Dr. Seuss in his book If I Ran the Zoo.", 
      "The shortest war in recorded history lasted only 38 minutes between Britain and Zanzibar on 27 August 1896.", 
      "The Great Barrier Reef off the coast of Australia is the largest living structure on Earth, visible from space.", 
      "A group of flamingos is called a flamboyance.", 
      "A giraffe's tongue is about 45 cm (18 inches) long.",
      "A cat has a specialized collar bone that allows it to always land on its feet.", 
      "The only letter that doesn't appear in any U.S. state name is Q.", 
      "The world's largest snowflake on record was 15 inches wide and 8 inches thick.", 
      "The nine dots puzzle, often used in brainstorming and problem-solving exercises, is called the Einstein puzzle because Albert Einstein is said to have completed it in under a minute.", 
      "The fear of long words is called Hippopotomonstrosesquippedaliophobia.",
      "Bananas are berries, while strawberries are not.", 
      "Bananas are berries, while strawberries are not.", 
      "The Great Wall of China is not visible from space with the naked eye.", 
      "The world's largest pyramid is not in Egypt, but in Mexico.",
      "The shortest presidential term in US history was 31 days by William Henry Harrison, who died of pneumonia.", 
      "The term butterfly was originally used to describe a butter-coloured fly, not all members of the insect family.", 
      "The capital of Liberia is Monrovia, named after U.S. President James Monroe.",
      "The world's largest snowflake on record measured 15 inches wide and 8 inches thick, and weighed roughly 15 pounds", 
      "The national animal of Scotland is the unicorn.", 
      "The first recorded game of baseball was played on June 19, 1846 in Hoboken, New Jersey.",
      "The oldest known sample of the smallpox virus was discovered in a 17th-century grave in Lithuania.", 
      "The word “quiz” was originally a slang term for “strange or bizarre”.", 
      "The word “hippopotamus” comes from the Greek words “hippos” meaning horse and “potamus” meaning river.",
      "The world's largest penguin colony is located in Punta Tombo, Argentina, with over 1 million penguins.", 
      "The world's smallest mammal is the bumblebee bat, which weighs less than a penny.", 
      "The state with the most ghost towns in the U.S is Nevada.",
      "The longest river in the world, the Nile, flows through 11 countries.", 
      "The only letter that doesnt appear in the periodic table is the letter J."
    ];
  
    return responses[Math.floor(Math.random() * responses.length)];
  };
  
window.onload = function() {
    const button = document.querySelector('.generate-button');
    const response = document.querySelector('.response');
  
  button.addEventListener('click', function() {
    const randomResponse = getRandomResponse();
    response.innerHTML = randomResponse;
  });
};