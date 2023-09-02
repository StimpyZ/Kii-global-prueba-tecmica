import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { useCallback } from 'react'
import { particleConfig } from '../config/reactparticles-config'

export default function ParticleContainer () {

    const particleInit = useCallback(async (engine) => {

        await loadFull(engine)

    }, [])

    const particlesLoaded = useCallback(async () => {}, [])

    return <Particles
        className="w-full h-full absolute translate-z-0 z-[1]"
        id="tsparticles"
        init={particleInit}
        loaded={particlesLoaded}
        options={particleConfig}
    />

}
