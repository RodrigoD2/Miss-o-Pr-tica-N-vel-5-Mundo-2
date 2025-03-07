import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivros } from '../../../classes/controle/ControleLivros';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { codigo } = req.query;
  if (req.method === 'DELETE') {
    try {
      controleLivros.excluir(Number(codigo));
      res.status(200).json({ message: 'Livro excluído com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro no servidor' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
};
