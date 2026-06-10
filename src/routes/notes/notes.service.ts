export async function listNotes() {
  return []
}

export async function getNoteById(id: string) {
  return null
}

export async function createNote(data: any) {
  return {
    id: crypto.randomUUID(),
    ...data,
  }
}