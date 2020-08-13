import { DocumentSentiment } from './documentSentiment';
import { SentencesData } from './sentencesData';

export class EnteredData {
    documentSentiment: DocumentSentiment;
    language: string;
    sentences: [SentencesData];
}
