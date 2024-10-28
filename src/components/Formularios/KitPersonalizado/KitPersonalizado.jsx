import React, { useState } from 'react';
import BarraInicial from '../../BarraInicial/BarraInicial';
import Footer from '../../Footer/Footer';
import Campo from '../../Campo/Campo';

import './main.sass';
import { useNavigate } from 'react-router-dom';

function KitPersonalizado() {
    const [tipoProduto, setTipoProduto] = useState('');
    const [baseProduto, setBaseProduto] = useState('');
    const [corProduto, setCorProduto] = useState('');
    const [aromaProduto, setAromaProduto] = useState('');
    const [agenteBrilho, setAgenteBrilho] = useState('');
    const [efeitoAdicional, setEfeitoAdicional] = useState('');
    const [corEmbalagem, setCorEmbalagem] = useState('');

    const navigate = useNavigate()

    const listaTipoProduto = [
        { valor: 'glossLabial', titulo: 'Gloss Labial' },
        { valor: 'lipBalm', titulo: 'Lip Balm' },
        { valor: 'lapisBoca', titulo: 'Lápis de Boca' },
        { valor: 'esfolianteLabial', titulo: 'Esfoliante Labial' },
        { valor: 'lipTint', titulo: 'Lip Tint' },
    ];

    const listaBaseProduto = [
        { valor: 'oleoPitanga', titulo: 'Óleo de pitanga' },
        { valor: 'manteigaKarite', titulo: 'Manteiga de karité' },
        { valor: 'ceraAbelha', titulo: 'Cera de abelha' },
        { valor: 'oleoCoco', titulo: 'Óleo de coco' },
        { valor: 'manteigaCacau', titulo: 'Manteiga de cacau' },
    ];

    const listaCorProduto = [
        { valor: 'transparente', titulo: 'Transparente' },
        { valor: 'rosaSuave', titulo: 'Rosa suave' },
        { valor: 'vermelhoPitanga', titulo: 'Vermelho pitanga' },
        { valor: 'corPesego', titulo: 'Cor de pêssego' },
        { valor: 'burgundy', titulo: 'Burgundy' },
        { valor: 'laranja', titulo: 'Laranja' },
        { valor: 'coral', titulo: 'Coral' },
        { valor: 'nude', titulo: 'Nude' },
    ];

    const listaAromaProduto = [
        { valor: 'baunilha', titulo: 'Baunilha' },
        { valor: 'frutasCitricas', titulo: 'Frutas cítricas' },
        { valor: 'pitanga', titulo: 'Pitanga' },
        { valor: 'frutasVermelhas', titulo: 'Frutas vermelhas' },
        { valor: 'coco', titulo: 'Coco' },
        { valor: 'jasmim', titulo: 'Jasmim' },
        { valor: 'menta', titulo: 'Menta' },
    ];

    const listaAgenteBrilho = [
        { valor: 'brilhoIntenso', titulo: 'Sim, com brilho intenso' },
        { valor: 'brilhoSuave', titulo: 'Sim, com brilho suave' },
        { valor: 'nao', titulo: 'Não, obrigado!' },
    ];

    const listaEfeitoAdicional = [
        { valor: 'hidratante', titulo: 'Com efeito hidratante' },
        { valor: 'protecaoSolar', titulo: 'Com proteção solar (FPS)' },
        { valor: 'efeitoRefrescante', titulo: 'Com efeito refrescante (mentol)' },
        { valor: 'efectoAntioxidante', titulo: 'Com efeito antioxidante (vitamina E)' },
        { valor: 'nao', titulo: 'Não, obrigado!' },
    ];

    const listaCorEmbalagem = [
        { valor: 'preto', titulo: 'Preto' },
        { valor: 'rosa', titulo: 'Rosa' },
        { valor: 'vermelhoPitanga', titulo: 'Vermelho pitanga' },
        { valor: 'verdePitanga', titulo: 'Verde pitanga' },
        { valor: 'dourado', titulo: 'Dourado' },
        { valor: 'transparente', titulo: 'Transparente' },
    ];

    return (
        <>
            <BarraInicial />
            <div className='principal-kit'>
                <h1 className='titulo-kit'>Montar um Kit Personalizado</h1>

                <Campo
                    titulo={'Que tipo de produto você gostaria de incluir no seu kit?'}
                    valor={tipoProduto}
                    setConteudo={setTipoProduto}
                    lista={listaTipoProduto}
                />
                <Campo
                    titulo={'Qual base você prefere?'}
                    valor={baseProduto}
                    setConteudo={setBaseProduto}
                    lista={listaBaseProduto}
                />
                <Campo
                    titulo={'Que cor você gostaria para seus produtos?'}
                    valor={corProduto}
                    setConteudo={setCorProduto}
                    lista={listaCorProduto}
                />
                <Campo
                    titulo={'Que aroma você prefere?'}
                    valor={aromaProduto}
                    setConteudo={setAromaProduto}
                    lista={listaAromaProduto}
                />
                <Campo
                    titulo={'Você gostaria de adicionar um agente de brilho?'}
                    valor={agenteBrilho}
                    setConteudo={setAgenteBrilho}
                    lista={listaAgenteBrilho}
                />
                <Campo
                    titulo={'Você gostaria de adicionar algum efeito especial?'}
                    valor={efeitoAdicional}
                    setConteudo={setEfeitoAdicional}
                    lista={listaEfeitoAdicional}
                />
                <Campo
                    titulo={'Que cor você prefere para a embalagem do seu kit?'}
                    valor={corEmbalagem}
                    setConteudo={setCorEmbalagem}
                    lista={listaCorEmbalagem}
                />
            </div>

            <div className='botao'>
                <button onClick={() => navigate('/')}>
                        Avançar
                </button>
            </div>
            <Footer />
        </>
    );
}

export default KitPersonalizado;
