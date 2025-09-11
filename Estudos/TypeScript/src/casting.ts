// no TS não é possivel ter variveis com o mesmo nome em aquivos diferentes. Para queseja possivel ultilizamos o namespace que cria um arquivo virtual 
namespace casting {
    let idade: any = 25;
    //convertendo a variavel
    (idade as number).toFixed();
    (idade as string).length;
    (idade as string[]).fill;
    // cuidado ao converter pois as funções atribuidas ao tipo poder gerar erros
    let nome: any = 32 as unknown as string;
}