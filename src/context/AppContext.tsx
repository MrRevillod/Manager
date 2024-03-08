
import { create } from "zustand"

import { documentDir } from "@tauri-apps/api/path"
import { writeTextFile, createDir, exists } from "@tauri-apps/api/fs"

export interface AppState {
    applicationDir: string
    profilePicture: string
    createAppdata: () => void
}

export const useAppState = create<AppState>(set => ({

    applicationDir: "",
    profilePicture: "",

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

        set({ applicationDir: appDataPath })
    },
}))