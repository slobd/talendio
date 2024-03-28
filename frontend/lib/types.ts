export type OptionType = {
    value: string,
    label: string,
}

export type JobType = {
    logo: string | null,
    title: string | null,
    description: string | null,
    role: string[] | [],
    locationType: string | null,
    skills: string[] | [],
    location: string | null,
}

export type UserType = {
    firstName?: string,
    lastName?: string,
    email?: string,
}