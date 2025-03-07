import { NextApiRequest, NextApiResponse } from 'next';
import { ControleLivros } from '../../../classes/controle/ControleLivros';

const controleLivro = new ControleLivros();

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      res.status(200).json(controleLivro.obterLivros());
    } catch (error) {
      res.status(500).json({ error: 'Erro no servidor' });
    }
  } else if (req.method === 'POST') {
    try {
      const livro = req.body;
      controleLivro.incluir(livro);
      res.status(200).json({ message: 'Livro incluído com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro no servidor' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
};
