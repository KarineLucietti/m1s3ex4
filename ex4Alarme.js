function verificarAniversario(birthday) {
    const today = new Date();
    const diffInMs = birthday - today;
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  
    if (diffInDays === 0) {
      console.log("Feliz aniversário!");
    } else {
      console.log(`Faltam ${diffInDays} dias para o aniversário.`);
    }
  }
  
  const birthDate = new Date('2023-02-21');
  
  setInterval(() => {
    verificarAniversario(birthDate);
  }, 8000);