import { mockService } from '@/services/mock.service.js'
import { httpService } from '@/services/http.service.js'

const USE_MOCK = true

export const dataService = USE_MOCK ? mockService : httpService
