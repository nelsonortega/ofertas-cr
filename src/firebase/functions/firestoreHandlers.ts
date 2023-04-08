import { doc, getDoc, setDoc, getDocs, CollectionReference, DocumentData } from 'firebase/firestore'

interface DocumentsResponse {
  success: boolean
  documents: DocumentData[]
}

interface CreateDocumentResponse {
  success: boolean
  documentId: string
}

interface UpdateDocumentResponse {
  success: boolean
  document: DocumentData
}

export async function createDocument (collection: CollectionReference, newDocument: Object): Promise<CreateDocumentResponse> {
  const createResponse = {
    success: true,
    documentId: ''
  }

  const documentRefId = doc(collection).id
  const documentRef = doc(collection, documentRefId)

  const documentToAddWithId = {
    id: documentRefId,
    ...newDocument
  }

  try {
    await setDoc(documentRef, documentToAddWithId)

    createResponse.documentId = documentRefId

    return createResponse
  } catch (error) {
    createResponse.success = false
    return createResponse
  }
}

export async function updateDocument (collection: CollectionReference, documentId: string, newDocument: DocumentData): Promise<UpdateDocumentResponse> {
  const updateResponse = {
    success: true,
    document: {}
  }

  const documentRef = doc(collection, documentId)

  try {
    const document = await getDoc(documentRef)

    if (!document.exists()) {
      updateResponse.success = false
      return updateResponse
    }

    await setDoc(documentRef, newDocument, { merge: true })

    updateResponse.document = {
      ...document.data(),
      ...newDocument
    }

    return updateResponse
  } catch (error) {
    updateResponse.success = false
    return updateResponse
  }
}

export async function getAllDocuments (collection: CollectionReference): Promise<DocumentsResponse> {
  const documentsResponse: DocumentsResponse = {
    success: true,
    documents: []
  }

  try {
    const documentsFetched = await getDocs(collection)

    documentsFetched.forEach((document) => {
      documentsResponse.documents.push(document.data())
    })

    return documentsResponse
  } catch (error) {
    documentsResponse.success = false

    return documentsResponse
  }
}
