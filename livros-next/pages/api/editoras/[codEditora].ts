import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from '../../../classes/controle/ControleEditora';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { codEditora } = req.query;

  if (req.method === 'GET') {
    try {
      const nomeEditora = controleEditora.getNomeEditora(Number(codEditora));
      if (nomeEditora) {
        res.status(200).json({ nome: nomeEditora });
      } else {
        res.status(404).json({ error: 'Editora não encontrada' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro no servidor' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
};
