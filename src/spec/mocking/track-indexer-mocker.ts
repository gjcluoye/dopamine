import { IMock, Mock } from 'typemoq';
import { Logger } from '../../app/core/logger';
import { TrackAdder } from '../../app/services/indexing/track-adder';
import { TrackIndexer } from '../../app/services/indexing/track-indexer';
import { TrackRemover } from '../../app/services/indexing/track-remover';
import { TrackUpdater } from '../../app/services/indexing/track-updater';

export class TrackIndexerMocker {
    constructor() {
        this.trackIndexer = new TrackIndexer(
            this.trackRemoverMock.object,
            this.trackUpdaterMock.object,
            this.trackAdderMock.object,
            this.loggerMock.object
        );
    }

    public trackRemoverMock: IMock<TrackRemover> = Mock.ofType<TrackRemover>();
    public trackUpdaterMock: IMock<TrackUpdater> = Mock.ofType<TrackUpdater>();
    public trackAdderMock: IMock<TrackAdder> = Mock.ofType<TrackAdder>();
    public loggerMock: IMock<Logger> = Mock.ofType<Logger>();
    public trackIndexer: TrackIndexer;
}
