
import chai, {expect} from 'chai';
import sinon from 'ts-sinon';
import {handleMessage} from './brian-rules';
import {EmojiResolvable, Message} from 'discord.js';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);


describe('#brian-rules', () => {
  const redCardeEmoji = '🟥' as EmojiResolvable;
  afterEach(()=> {
    sinon.restore();
  });

  describe('#handleMessage', ()=> {
    it('should not find a matching word', async () => {
      const message = sinon.createStubInstance(Message);
      message.content = 'no redcards today!';
      await handleMessage(message as unknown as Message);

      expect(message.react).to.not.be.called;
    });


    it('should issue a redcard for the word "shit"', async () => {
      const message = sinon.createStubInstance(Message);
      message.content = 'what the shit .';

      await handleMessage(message as unknown as Message);

      expect(message.react).to.be.calledWith(redCardeEmoji);
    });

    it('should issue a redcard for the word "shit" and a period after it.', async () => {
      const message = sinon.createStubInstance(Message);
      message.content = 'what the shit.';

      await handleMessage(message as unknown as Message);

      expect(message.react).to.be.calledWith(redCardeEmoji);
    });

    it('should issue a redcard for the word "shit" and a ! after it.', async () => {
      const message = sinon.createStubInstance(Message);
      message.content = 'what the shit!';

      await handleMessage(message as unknown as Message);

      expect(message.react).to.be.calledWith(redCardeEmoji);
    });
  });
});

