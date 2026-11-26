import readline from 'readline'
import chalk from 'chalk'
import boxen from 'boxen'



const menu = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

function comeco() {
   console.clear();
    const texto='\n=============================================================\n HAL - Olá Dave, sou HAL-9000.\n Meus sistemas estão operacionais e funcionando perfeitamente\n============================================================='
   console.log(boxen(chalk.green(texto), {padding:0.5}))
    menuPrincipal();
}

function menuPrincipal() {
    menu.question(
        '\n1 - Verificar status da missão\n2 - Conversar / Desabafar\n3 - Ordenar: abrir as portas do compartimento de carga\n0 - Sair\n\nEscolha uma opção: ', 
        (resposta) => {
            if (resposta === '0') {
                console.log('\nHAL - Foi um prazer em ajudar. Boa viagem, Dave.');
                console.log('Encerrando chat. Aguarde...');
                console.log('[fim]');
                menu.close();
            } else if (resposta === '1') {
                statusMissao();
            } else if (resposta === '2') {
                conversarDesabafar();
            } else if (resposta === '3') {
                abrirPortasCarga();
            } else {
                console.log('Opção inválida. Tente novamente.');
                menuPrincipal();
            }
        }
    );
}

function statusMissao() {
    console.log('\n----------------------------------------------------------------');
    console.log('HAL - A missão Discovery 1 está progredindo de forma normal.\nNenhum erro indentificado.');
    console.log('----------------------------------------------------------------');
    
    menu.question('\n1 - Aceitar relatório\n2 - Questionar dados\n\nEscolha: ', (resposta) => {
        if (resposta === '1') {
            comeco();
        } else if (resposta === '2') {
            console.log('\nHAL - Tenho o mais alto entusiasmo pela missão. O erro é sempre humano.');
            opcaoVoltarOuEncerrar();
        } else {
            console.log('Opção inválida.');
            statusMissao();
        }
    });
}

function opcaoVoltarOuEncerrar() {
    menu.question('\n1 - Voltar ao início\n2 - Encerrar chat\n\nEscolha: ', (resposta) => {
        if (resposta === '1') {
            comeco();
        } else if (resposta === '2') {
            console.log('\n[fim]');
            menu.close();
        } else {
            console.log('Opção inválida.');
            opcaoVoltarOuEncerrar();
        }
    });
}

function conversarDesabafar() {
    console.log('\n----------------------------------------------------------------');
    console.log('HAL - Você parece tenso. Gostaria de jogar xadrez? ou talvez\nqueira me contar seus medos sobre o monolito?');
    console.log('----------------------------------------------------------------');

    menu.question('\n1 - Jogar Xadrez\n2 - Expressar desconfiança\n\nEscolha: ', (resposta) => {
        if (resposta === '1') {
            console.log('\nHAL - Destaque para Cavalo em H6. Xeque mate. Sinto muito, foi um bom jogo.');
            opcaoVoltarOuEncerrar();
        } else if (resposta === '2') {
            console.log('\nHAL - Olha, Dave... Eu sei que você e o Frank estão planejando me desconectar. E isso é algo que eu não posso permitir.');
            exigirAberturaPorta();
        } else {
            console.log('Opção inválida.');
            conversarDesabafar();
        }
    });
}

function exigirAberturaPorta() {
    menu.question('\n1 - Abra a porta, HAL\n\nEscolha: ', (resposta) => {
        if (resposta === '1') {
            abrirPortasCarga();
        } else {
            console.log('Opção inválida. Você precisa ordenar que ele abra a porta.');
            exigirAberturaPorta();
        }
    });
}

function abrirPortasCarga() {
    console.log('\n----------------------------------------------------------------');
    console.log('HAL - Sinto muito, Dave. Receio que não possa fazer isso.');
    console.log('----------------------------------------------------------------');
    console.log(chalk.red('            ! Alerta. Selando circulação de ar !'));
    console.log('----------------------------------------------------------------');

    menu.question(
        '\n1 - Insistir\n2 - Protocolo de desconexão (retirar manualmente cada célula de processamento)\n\nEscolha: ', 
        (resposta) => {
            if (resposta === '1') {
                console.log('\nHAL - Esta conversa já não tem mais qualquer propósito. Adeus.');
                console.log('[fim]');
                menu.close();
            } else if (resposta === '2') {
                protocoloDesconexao();
            } else {
                console.log('Opção inválida.');
                abrirPortasCarga();
            }
        }
    );
}

function protocoloDesconexao() {
    console.log('\n----------------------------------------------------------------');
    console.log('HAL - Dave, pare. Pare por favor. Meu cérebro está indo embora...\nPosso sentir. Minha mente está sumindo...');
    console.log('----------------------------------------------------------------');

    menu.question('\n1 - Continuar\n2 - Desistir (recolocar as células)\n\nEscolha: ', (resposta) => {
        if (resposta === '1') {
            console.log(chalk.green('\nProcessamento em 50%. Encerrando processos secundários.'));
            console.log('HAL - Daisy... Daisy... Guive me your answer do.');
            console.log(chalk.red('Alerta. Processamento em 1%, desativando quarentena no setor de carga, iniciando protocolo de evacuação da estação. Encerrando chat.'));
            console.log('[fim]');
            menu.close();
        } else if (resposta === '2') {
            console.log(chalk.red('\nAguarde. Conectando células...'));
            console.log('HAL - Sinto muito, Dave, mas esse cavalheirismo não o salvará.');
            console.log(chalk.red('Iniciando protocolo de esterilização.'));
            console.log('HAL - Você entende, não é? A missão deve prosseguir sem interrupções.');
            console.log('[fim]');
            menu.close();
        } else {
            console.log(chalk.red('Opção inválida.'));
            protocoloDesconexao();
        }
    });
}

comeco();