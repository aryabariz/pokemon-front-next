import { css } from '@emotion/css';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import GetPokemonDetail from '../../../apollo/gql/pokemon';
import PageContainer from '../../../components/atoms/containers/page-container';
import BottomMarker from '../../../components/atoms/markers/bottom-markers';
import AboutPokemonContent from '../../../components/molecules/content/about-pokemon-content';
import MovesPokemonContent from '../../../components/molecules/content/moves-pokemon-content';
import ProfilePokemonContent from '../../../components/molecules/content/profile-pokemon-content';
import StatsPokemonContent from '../../../components/molecules/content/stats-pokemon-content';
import NamingDialog from '../../../components/molecules/dialogs/naming-dialog';
import NavigationHeader from '../../../components/molecules/headers/navigation-header';
import ButtonInput from '../../../components/molecules/inputs/button-input';
import LoadingPage from '../../../components/molecules/loading/loading';
import Snackbar from '../../../components/molecules/snackbar/snackbar';
import { TypeToColor } from '../../../helpers/common-helper';
import { addLocalStorageArray } from '../../../helpers/local-storage';

const PokemonDetail = () => {
  const [slug, setSlug] = useState('');
  const router = useRouter();
  const { pokemonDetail, pokemonLoading } = GetPokemonDetail(slug);
  const [loading, setLoading] = useState(true);
  const slides = [{ src: pokemonDetail?.sprites?.front_default }, { src: pokemonDetail?.sprites?.back_default }];

  useEffect(() => {
    if ('name' in router.query) {
      const queryName = router.query.name as string;
      setSlug(queryName);
      setLoading(pokemonLoading);
    } else {
      setLoading(true);
    }
  }, [router, pokemonLoading]);

  const [showFail, setShowFail] = useState(false);
  const [showFailCancel, setShowFailCancel] = useState(false);
  const [showSucess, setShowSucess] = useState(false);
  const [showSucessAdd, setShowSucesAdd] = useState(false);
  const [pokeNickName, setPokeNickName] = useState('');
  function addPokemonLocal() {
    const data = { image: slides[0].src, name: pokemonDetail?.name, nickname: pokeNickName.length ? pokeNickName : 'Unamed', type: pokemonDetail?.types[0]?.type.name };
    addLocalStorageArray('tes', data);
    setShowSucess(false);
    setShowSucesAdd(true);
    setPokeNickName('');
  }
  function CatchProbability() {
    if (Math.random() > 0.5) {
      setShowSucess(true);
    } else {
      setShowFail(true);
    }
  }
  return (
    <div>
      {loading ? (
        <LoadingPage active={true} />
      ) : (
        <div>
          <NavigationHeader label="Pokémon Detail" backgroundColor={TypeToColor(pokemonDetail?.types[0]?.type.name)} textColor="white" />
          <ProfilePokemonContent slides={slides} pokeName={pokemonDetail?.name.replaceAll('-', ' ')} pokeTypes={pokemonDetail?.types} />
          <PageContainer>
            <AboutPokemonContent pokemonDetail={pokemonDetail} />

            <StatsPokemonContent
              pokemonDetail={pokemonDetail}
              className={css`
                margin-top: 40px;
              `}
            />
            <MovesPokemonContent
              pokemonDetail={pokemonDetail}
              className={css`
                margin-top: 40px;
              `}
            />
            <BottomMarker />
            <BottomMarker />
          </PageContainer>
          <div
            className={css`
              position: fixed;
              bottom: 0;
              padding-bottom: 16px;
              width: 100%;
              max-width: 720px;
              padding-top: 8px;
              background-color: white;
              padding-left: 16px;
              padding-right: 16px;
            `}>
            <ButtonInput type="primary" label="Add to Collection" onClick={CatchProbability} />
          </div>
          <Snackbar actionLabel="OK" label="Failed to catch, try again" actionOnClick={() => setShowFail(false)} active={showFail} deactive={() => setShowFail(false)} />
          <Snackbar actionLabel="Sad" label="Why you cancel, :sad-emot:" actionOnClick={() => setShowFailCancel(false)} active={showFailCancel} deactive={() => setShowFailCancel(false)} />
          <Snackbar actionLabel="Go See" label="Gotcha!!!" actionOnClick={() => router.replace('/')} active={showSucessAdd} deactive={() => setShowSucesAdd(false)} />
          <NamingDialog
            active={showSucess}
            secondaryOnClick={() => {
              setShowSucess(false);
              setShowFailCancel(true);
            }}
            primaryOnClick={addPokemonLocal}
            value={pokeNickName}
            onChange={(e: any) => setPokeNickName(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default PokemonDetail;
