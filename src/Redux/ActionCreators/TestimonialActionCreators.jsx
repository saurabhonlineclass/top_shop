import { CREATE_BRAND, DELETE_BRAND, GET_BRAND, UPDATE_BRAND } from "../Constant"

export function createTestimonial(data) {
    return {
        type: CREATE_BRAND,
        payload: data
    }
}

export function getTestimonial() {
    return {
        type: GET_BRAND
    }
}

export function updateTestimonial(data) {
    return {
        type: UPDATE_BRAND,
        payload: data
    }
}

export function deleteTestimonial(data) {
    return {
        type: DELETE_BRAND,
        payload: data
    }
}