import { describe, it, expect } from 'vitest'
import * as notesService from '../routes/notes/notes.service.js'

describe('Notes Service', () => {
  it('should list notes', async () => {
    const notes = await notesService.listNotes()

    expect(notes).toEqual([])
  })
})