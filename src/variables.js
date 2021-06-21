import { v4 as uuidv4 } from 'uuid';

const DASHBOARD = 'DASHBOARD';
const BOOKFORM = 'BOOKFORM';

const BOOK = {
  id: uuidv4(),
  bookTitle: '',
  authorName: '',
  category: '',
  ISBN: '',
};

export { BOOK, DASHBOARD, BOOKFORM };
