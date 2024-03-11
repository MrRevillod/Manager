
import { create } from "zustand"

import { convertFileSrc } from "@tauri-apps/api/tauri"
import { documentDir, join } from "@tauri-apps/api/path"
import { writeTextFile, createDir, exists } from "@tauri-apps/api/fs"

export interface AppState {
    applicationDir: string
    profilePicture: string
    schedulePicture: string
    createAppdata: () => void
    getSchedulePicture: () => void
}

export const useAppState = create<AppState>((set, get) => ({

    applicationDir: "",
    profilePicture: "",
    schedulePicture: "",

    createAppdata: async () => {

        const documentPath = await documentDir()
        const appDataPath = `${documentPath}manager-app`

        if (!await exists(appDataPath)) {

            await createDir(appDataPath)

            await writeTextFile(`${appDataPath}/tasks.json`,
                JSON.stringify([])
            )

            await writeTextFile(`${appDataPath}/settings.json`,
                JSON.stringify([])
            )
        }

        get().getSchedulePicture()

        set({ applicationDir: appDataPath })
    },

    getSchedulePicture: async () => {

        const imgPath = await join(await documentDir(), "manager-app/schedule.png")
        if (!await exists(imgPath)) return
        set({ schedulePicture: convertFileSrc(imgPath) })
    }
}))